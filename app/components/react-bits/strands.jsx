"use client"

import { useEffect, useRef } from "react"
import { Color, Mesh, Program, Renderer, Triangle } from "ogl"

const MAX_COLORS = 8
const MAX_STRANDS = 8

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`

const fragment = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColors[${MAX_COLORS}];
uniform int uColorCount;
uniform int uStrandCount;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uOpacity;
out vec4 fragColor;
const float PI = 3.14159265;

vec3 palette(float t) {
  float scaled = fract(t) * float(uColorCount);
  int idx = int(floor(scaled));
  int nextIdx = idx + 1;
  if (nextIdx >= uColorCount) nextIdx = 0;
  return mix(uColors[idx], uColors[nextIdx], fract(scaled));
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float env = pow(max(cos(uv.x * PI * 1.1), 0.0), 2.8);
  vec3 col = vec3(0.0);

  for (int i = 0; i < ${MAX_STRANDS}; i++) {
    if (i >= uStrandCount) break;
    float fi = float(i);
    float phase = fi * 1.72;
    float speed = 1.0 + fi * 0.42;
    float wave = sin(uv.x * (2.5 + fi * 0.3) + uTime * uSpeed * speed + phase) * 0.62;
    wave += sin(uv.x * (4.2 + fi * 0.18) - uTime * uSpeed * 0.72 + phase * 1.4) * 0.38;
    float y = wave * 0.115 * env * uAmplitude;
    float distanceToLine = abs(uv.y - y);
    float thickness = (0.006 + fi * 0.0007) * (0.55 + env);
    float glow = thickness / (distanceToLine + thickness * 0.55);
    col += palette(fi / float(uStrandCount) + uv.x * 0.24 + uTime * 0.018) * glow * glow * env;
  }

  col = 1.0 - exp(-col * 2.1);
  float alpha = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0) * uOpacity;
  fragColor = vec4(col * uOpacity, alpha);
}
`

function makePalette(colors) {
  const source = colors.length ? colors : ["#ffffff"]
  return Array.from({ length: MAX_COLORS }, (_, index) => {
    const color = new Color(source[index] ?? source[source.length - 1])
    return [color.r, color.g, color.b]
  })
}

export function Strands({
  colors = ["#24d9ff", "#7567ff", "#ff5bd7"],
  count = 4,
  speed = 0.42,
  amplitude = 1,
  opacity = 0.72,
  className = "",
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 1.5),
    })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

    const geometry = new Triangle(gl)
    if (geometry.attributes.uv) delete geometry.attributes.uv
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
        uColors: { value: makePalette(colors) },
        uColorCount: { value: Math.min(colors.length, MAX_COLORS) },
        uStrandCount: { value: Math.min(Math.max(count, 1), MAX_STRANDS) },
        uSpeed: { value: speed },
        uAmplitude: { value: amplitude },
        uOpacity: { value: opacity },
      },
    })
    const mesh = new Mesh(gl, { geometry, program })
    container.appendChild(gl.canvas)

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      renderer.setSize(Math.max(width, 1), Math.max(height, 1))
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height]
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()

    let visible = true
    let frame = 0
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    }, { rootMargin: "120px" })
    visibilityObserver.observe(container)

    const render = (time = 0) => {
      if (visible && !document.hidden) {
        program.uniforms.uTime.value = time * 0.001
        renderer.render({ scene: mesh })
      }
      if (!reducedMotion) frame = requestAnimationFrame(render)
    }
    render(0)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      visibilityObserver.disconnect()
      if (gl.canvas.parentNode === container) container.removeChild(gl.canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [amplitude, colors, count, opacity, speed])

  return <div ref={containerRef} className={`strands-container ${className}`} aria-hidden="true" />
}
