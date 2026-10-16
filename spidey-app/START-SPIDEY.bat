@echo off
title Spidey 3D
cd /d "%~dp0"
echo.
echo   ===========================================
echo      SPIDEY 3D  -  starting your app...
echo   ===========================================
echo.
where node >nul 2>nul || (echo Node.js is not installed. Get it free from https://nodejs.org  then run this again. & pause & exit /b)
if not exist node_modules (
  echo Installing - first time only, about 1 minute...
  call npm install
)
call npm run build
start "" http://localhost:4173
call npx vite preview --port 4173
