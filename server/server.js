const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/db');

// Route handlers
const authRoutes = require('./routes/authRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const eventRoutes = require('./routes/eventRoutes');
const projectRoutes = require('./routes/projectRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const matchRoutes = require('./routes/matchRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB (with graceful fallback)
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/matches', matchRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'CampusConnect: An integrated student management and collabration platform',
    tagline: 'Connect • Collaborate • Grow',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Serve frontend in production or if client/dist exists
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Endpoint not found' });
  }
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>CampusConnect API Server</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 40px; background: #f8fafc; color: #1e293b; }
            .card { background: white; padding: 28px; border-radius: 14px; max-width: 600px; margin: auto; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
            h1 { color: #2563eb; margin-top: 0; }
            code { background: #eff6ff; color: #1d4ed8; padding: 3px 8px; border-radius: 6px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>🎓 CampusConnect API Active</h1>
            <p><strong>Tagline:</strong> Connect • Collaborate • Grow</p>
            <p>The backend REST API server is running on port <code>${PORT}</code>.</p>
            <p>To run the frontend dev server, execute: <code>npm run client</code></p>
          </div>
        </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n=============================================================`);
  console.log(`🎓 CampusConnect: An integrated student management & collaboration platform`);
  console.log(`   Tagline: Connect • Collaborate • Grow`);
  console.log(`   Server running on: http://localhost:${PORT}`);
  console.log(`   API Health check:  http://localhost:${PORT}/api/health`);
  console.log(`=============================================================\n`);
});
