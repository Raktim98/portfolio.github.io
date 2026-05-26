declare module 'webgl-fluid' {
  interface WebGLFluidConfig {
    IMPRESS?: number;
    DENSITY_DISSIPATION?: number;
    VELOCITY_DISSIPATION?: number;
    PRESSURE?: number;
    PRESSURE_ITERATIONS?: number;
    CURL?: number;
    SPLAT_RADIUS?: number;
    SPLAT_FORCE?: number;
    SHADING?: boolean;
    COLORFUL?: boolean;
    COLOR_UPDATE_SPEED?: number;
    PAUSED?: boolean;
    BACK_COLOR?: { r: number; g: number; b: number };
    TRANSPARENT?: boolean;
  }

  function webglFluid(canvas: HTMLCanvasElement, config?: WebGLFluidConfig): void;
  export default webglFluid;
}