# MHS Student Portal - Complete Folder Structure

## 📁 Project Root Structure

```
mhs-student-portal/
│
├── 📁 dist/                          # Built/compiled files (generated)
│   ├── index.html                    # Main HTML file (built)
│   ├── main.[hash].js                # Main JavaScript bundle
│   ├── vendors.[hash].js             # Third-party libraries bundle
│   ├── [number].[hash].js            # Code-split chunks
│   ├── service-worker.js             # Progressive Web App service worker
│   ├── manifest.[hash].json          # PWA manifest file
│   └── *.LICENSE.txt                 # License files for dependencies
│
├── 📁 node_modules/                  # NPM dependencies (auto-generated)
│   ├── @babel/                       # Babel transpiler packages
│   ├── @webpack/                     # Webpack build tool packages
│   ├── css-loader/                   # CSS loading utilities
│   ├── html-webpack-plugin/          # HTML generation plugin
│   ├── webpack/                      # Core webpack functionality
│   ├── webpack-cli/                  # Webpack command line interface
│   ├── webpack-dev-server/           # Development server
│   └── [500+ other dependencies]     # All project dependencies
│
├── 📁 public/                        # Static public files
│   ├── index.html                    # Main HTML template
│   ├── 404.html                      # 404 error page
│   ├── manifest.json                 # PWA manifest configuration
│   ├── robots.txt                    # Search engine instructions
│   └── favicon.ico                   # Website icon
│
├── 📁 src/                           # Source code directory
│   │
│   ├── 📁 components/                # React-like components (JavaScript classes)
│   │   ├── Authentication.js         # Login/Register component
│   │   ├── Dashboard.js              # Main dashboard component
│   │   ├── LearningModule.js         # Learning content component
│   │   ├── Quiz.js                   # Quiz/testing component
│   │   ├── Progress.js               # Progress tracking component
│   │   ├── Profile.js                # User profile component
│   │   ├── Navigation.js             # Navigation menu component
│   │   └── VideoPlayer.js            # Video content player
│   │
│   ├── 📁 services/                  # Business logic and data services
│   │   ├── authService.js            # Authentication service
│   │   ├── userService.js            # User management service
│   │   ├── progressService.js        # Progress tracking service
│   │   ├── quizService.js            # Quiz management service
│   │   ├── videoService.js           # Video content service
│   │   └── storageService.js         # Local storage management
│   │
│   ├── 📁 data/                      # Static data and content
│   │   ├── k53Signs.js               # K53 road signs database
│   │   ├── trafficRules.js           # Traffic rules content
│   │   ├── quizQuestions.js          # Quiz questions database
│   │   ├── videoContent.js           # Video metadata and links
│   │   └── modules.js                # Learning modules configuration
│   │
│   ├── 📁 styles/                    # CSS and styling files
│   │   ├── main.css                  # Main stylesheet
│   │   ├── components.css            # Component-specific styles
│   │   ├── authentication.css        # Auth forms styling
│   │   ├── dashboard.css             # Dashboard layout styles
│   │   ├── quiz.css                  # Quiz interface styles
│   │   ├── responsive.css            # Mobile responsiveness
│   │   └── themes.css                # Color themes and variables
│   │
│   ├── 📁 assets/                    # Static assets
│   │   ├── 📁 images/                # Image files
│   │   │   ├── logos/                # Logo variations
│   │   │   ├── icons/                # UI icons
│   │   │   ├── signs/                # K53 road sign images
│   │   │   └── backgrounds/          # Background images
│   │   ├── 📁 videos/                # Video files (if local)
│   │   ├── 📁 audio/                 # Audio files for lessons
│   │   └── 📁 fonts/                 # Custom fonts
│   │
│   ├── 📁 utils/                     # Utility functions
│   │   ├── helpers.js                # General helper functions
│   │   ├── validators.js             # Input validation functions
│   │   ├── formatters.js             # Data formatting utilities
│   │   ├── constants.js              # Application constants
│   │   └── api.js                    # API communication utilities
│   │
│   ├── 📁 workers/                   # Service workers and web workers
│   │   ├── sw.js                     # Main service worker
│   │   ├── cache-worker.js           # Caching strategies
│   │   └── sync-worker.js            # Background sync worker
│   │
│   ├── main.js                       # Application entry point
│   ├── app.js                        # Main application class
│   └── router.js                     # Client-side routing
│
├── 📄 Configuration Files
├── .gitignore                        # Git ignore rules
├── package.json                      # NPM package configuration
├── package-lock.json                 # NPM dependency lock file
├── webpack.config.js                 # Webpack build configuration
├── README.md                         # Project documentation
├── FOLDER_STRUCTURE.md               # This file
└── mhs-driving-school-logo.png       # School logo image

```

## 📂 Detailed Directory Explanations

### `/dist/` - Distribution/Build Directory
- **Purpose**: Contains compiled, optimized code ready for production
- **Generated**: Automatically created by webpack build process
- **Contents**: Minified JavaScript, CSS, HTML, and assets
- **Note**: This folder is gitignored and regenerated on each build

### `/node_modules/` - Dependencies
- **Purpose**: NPM package dependencies
- **Size**: ~500+ packages including build tools, loaders, and utilities
- **Key Packages**:
  - `@babel/*` - JavaScript transpilation
  - `webpack*` - Module bundling and build system
  - `css-loader` - CSS processing
  - `html-webpack-plugin` - HTML generation

### `/public/` - Static Assets
- **Purpose**: Files served directly without processing
- **Contents**: HTML templates, PWA manifest, favicon
- **Accessibility**: Directly accessible via URL paths

### `/src/` - Source Code
The heart of the application containing all development code:

#### `/src/components/` - UI Components
- **Authentication.js**: Login/register forms and validation
- **Dashboard.js**: Main student dashboard with progress overview
- **LearningModule.js**: Interactive learning content display
- **Quiz.js**: Quiz interface with questions and scoring
- **Progress.js**: Progress tracking and analytics display
- **Profile.js**: User profile management
- **Navigation.js**: Site navigation and menu system
- **VideoPlayer.js**: Custom video player for lessons

#### `/src/services/` - Business Logic
- **authService.js**: User authentication and session management
- **userService.js**: User data CRUD operations
- **progressService.js**: Learning progress tracking
- **quizService.js**: Quiz logic and scoring
- **videoService.js**: Video content management
- **storageService.js**: Local storage abstraction

#### `/src/data/` - Static Content
- **k53Signs.js**: Database of South African road signs
- **trafficRules.js**: Traffic law and regulation content
- **quizQuestions.js**: Question bank for assessments
- **videoContent.js**: Video metadata and URLs
- **modules.js**: Learning module configurations

#### `/src/styles/` - Styling
- **main.css**: Global styles and CSS variables
- **components.css**: Component-specific styling
- **authentication.css**: Login/register form styles
- **dashboard.css**: Dashboard layout and grid
- **quiz.css**: Quiz interface styling
- **responsive.css**: Mobile and tablet responsiveness
- **themes.css**: Color schemes and theming

#### `/src/assets/` - Media Files
- **images/**: Visual assets including logos, icons, signs
- **videos/**: Local video content (if not CDN-hosted)
- **audio/**: Audio files for pronunciation guides
- **fonts/**: Custom typography files

#### `/src/utils/` - Utilities
- **helpers.js**: Common utility functions
- **validators.js**: Input validation logic
- **formatters.js**: Data formatting functions
- **constants.js**: Application-wide constants
- **api.js**: API communication helpers

#### `/src/workers/` - Web Workers
- **sw.js**: Service worker for PWA functionality
- **cache-worker.js**: Caching strategies for offline use
- **sync-worker.js**: Background synchronization

## 🔧 Configuration Files

### `package.json` - Project Configuration
```json
{
  "name": "mhs-student-portal",
  "version": "1.0.0",
  "description": "MHS Driving School Student Learning Portal",
  "main": "src/main.js",
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  }
}
```

### `webpack.config.js` - Build Configuration
- Entry point configuration
- Output settings
- Loaders for different file types
- Plugins for optimization
- Development server settings

### `.gitignore` - Version Control
```
node_modules/
dist/
*.log
.env
.DS_Store
*.tmp
*.temp
```

## 📊 File Count Summary

- **Total Files**: 1000+ (including node_modules)
- **Source Files**: ~50-100 custom files
- **Dependencies**: 500+ package files
- **Build Output**: 10-20 generated files
- **Configuration**: 5-10 config files

## 🔄 Build Process Flow

1. **Development**: `npm start`
   - Webpack dev server serves from memory
   - Hot reloading enabled
   - Source maps for debugging

2. **Production**: `npm run build`
   - Files compiled to `/dist/`
   - Code minification and optimization
   - Asset optimization and compression

## 📱 Progressive Web App Structure

The portal includes PWA capabilities:
- Service worker for offline functionality
- Web app manifest for installation
- Caching strategies for performance
- Background sync for data consistency

This structure ensures:
- ✅ Scalable architecture
- ✅ Clear separation of concerns
- ✅ Easy maintenance and updates
- ✅ Modern web development practices
- ✅ Production-ready optimization
