exports.config =
  # Archivos de entrada
  files:
    javascripts:
      joinTo:
        'app.js': /^(app|vendor)/
    stylesheets:
      joinTo:
        'app.css': /^(app|vendor)/

  # Opciones de compilación
  plugins:
    babel:
      presets: ['@babel/preset-env']

  # Otras opciones
  paths:
    public: 'public'

  modules:
    autoRequire: 
      'app.js': ['initialize']

  npm:
    enabled: true

  conventions:
    ignored: [
      /^vendor[\\/]/,
      /.*\.test\.js/
    ]

  # Configuración de servidores y watchers
  server:
    port: 3333

  watcher:
    usePolling: true

  overrides:
    production:
      optimize: true
      sourceMaps: false

    staging:
      optimize: true
      sourceMaps: true