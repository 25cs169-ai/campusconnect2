import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCampusScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f5ff'); // Light airy campus sky
    scene.fog = new THREE.FogExp2('#eff6ff', 0.018);

    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 14, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // ==========================================
    // LIGHTING: Blue & Purple Lighting Scheme
    // ==========================================
    const ambientLight = new THREE.AmbientLight('#e0e7ff', 1.2);
    scene.add(ambientLight);

    // Sun / Primary Light
    const dirLight = new THREE.DirectionalLight('#ffffff', 1.4);
    dirLight.position.set(20, 35, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Purple Accent Light
    const purpleLight = new THREE.PointLight('#9333ea', 2.5, 45);
    purpleLight.position.set(-12, 10, 8);
    scene.add(purpleLight);

    // Blue Accent Light
    const blueLight = new THREE.PointLight('#2563eb', 2.8, 50);
    blueLight.position.set(12, 12, 10);
    scene.add(blueLight);

    // Cyan Fill Light
    const cyanLight = new THREE.PointLight('#06b6d4', 1.5, 30);
    cyanLight.position.set(0, 4, 14);
    scene.add(cyanLight);

    // Group for the entire campus
    const campusGroup = new THREE.Group();
    scene.add(campusGroup);

    // ==========================================
    // 1. CAMPUS GROUND & PATHWAYS
    // ==========================================
    // Courtyard Ground
    const groundGeo = new THREE.PlaneGeometry(80, 80);
    const groundMat = new THREE.MeshStandardMaterial({
      color: '#e2e8f0',
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    campusGroup.add(ground);

    // Central circular plaza
    const plazaGeo = new THREE.CylinderGeometry(8, 8.2, 0.2, 32);
    const plazaMat = new THREE.MeshStandardMaterial({
      color: '#cbd5e1',
      roughness: 0.6,
    });
    const plaza = new THREE.Mesh(plazaGeo, plazaMat);
    plaza.position.y = 0.1;
    plaza.receiveShadow = true;
    campusGroup.add(plaza);

    // Central Fountain / Water Mirror
    const poolGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.3, 32);
    const poolMat = new THREE.MeshStandardMaterial({
      color: '#60a5fa',
      roughness: 0.1,
      metalness: 0.6,
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.y = 0.25;
    campusGroup.add(pool);

    // Pathways
    const pathMat = new THREE.MeshStandardMaterial({ color: '#f1f5f9', roughness: 0.7 });
    const pathGeoZ = new THREE.PlaneGeometry(4, 40);
    const pathZ = new THREE.Mesh(pathGeoZ, pathMat);
    pathZ.rotation.x = -Math.PI / 2;
    pathZ.position.y = 0.05;
    campusGroup.add(pathZ);

    const pathGeoX = new THREE.PlaneGeometry(40, 4);
    const pathX = new THREE.Mesh(pathGeoX, pathMat);
    pathX.rotation.x = -Math.PI / 2;
    pathX.position.y = 0.05;
    campusGroup.add(pathX);

    // ==========================================
    // 2. UNIVERSITY BUILDINGS
    // ==========================================
    const buildingMatWhite = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.3,
    });
    const buildingMatBlue = new THREE.MeshStandardMaterial({
      color: '#3b82f6',
      roughness: 0.2,
      metalness: 0.2,
    });
    const buildingMatPurple = new THREE.MeshStandardMaterial({
      color: '#7c3aed',
      roughness: 0.3,
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: '#93c5fd',
      transparent: true,
      opacity: 0.75,
      roughness: 0.1,
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: '#1e293b',
      roughness: 0.5,
    });

    // Building A: Central Main Hall with Clock Tower
    const mainHallGroup = new THREE.Group();
    mainHallGroup.position.set(0, 0, -12);

    const mainBody = new THREE.Mesh(new THREE.BoxGeometry(14, 8, 8), buildingMatWhite);
    mainBody.position.y = 4;
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    mainHallGroup.add(mainBody);

    // Clock Tower
    const towerBody = new THREE.Mesh(new THREE.BoxGeometry(4, 9, 4), buildingMatWhite);
    towerBody.position.set(0, 12, 0);
    towerBody.castShadow = true;
    mainHallGroup.add(towerBody);

    // Tower Spire / Pyramid
    const spireGeo = new THREE.ConeGeometry(2.8, 4, 4);
    const spire = new THREE.Mesh(spireGeo, buildingMatPurple);
    spire.position.set(0, 18.5, 0);
    spire.rotation.y = Math.PI / 4;
    spire.castShadow = true;
    mainHallGroup.add(spire);

    // Glowing Clock Face
    const clockGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 16);
    const clockMat = new THREE.MeshStandardMaterial({ color: '#fef08a', emissive: '#facc15', emissiveIntensity: 0.6 });
    const clock = new THREE.Mesh(clockGeo, clockMat);
    clock.rotation.x = Math.PI / 2;
    clock.position.set(0, 13.5, 2.05);
    mainHallGroup.add(clock);

    // Portico & Classical Columns
    for (let c = -4; c <= 4; c += 2) {
      const colGeo = new THREE.CylinderGeometry(0.35, 0.35, 6, 16);
      const col = new THREE.Mesh(colGeo, buildingMatWhite);
      col.position.set(c, 3, 4.8);
      col.castShadow = true;
      mainHallGroup.add(col);
    }
    campusGroup.add(mainHallGroup);

    // Building B: Science & AI Wing (Left)
    const scienceWing = new THREE.Group();
    scienceWing.position.set(-14, 0, -2);
    const scBody = new THREE.Mesh(new THREE.BoxGeometry(8, 9, 14), buildingMatWhite);
    scBody.position.y = 4.5;
    scBody.castShadow = true;
    scienceWing.add(scBody);

    // Modern Glass Curtain Wall
    const glassWall = new THREE.Mesh(new THREE.BoxGeometry(8.2, 7, 6), glassMat);
    glassWall.position.set(0.1, 4.5, 0);
    scienceWing.add(glassWall);

    // Slanted Roof
    const roofB = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.8, 14.4), buildingMatBlue);
    roofB.position.set(0, 9.3, 0);
    roofB.rotation.z = -0.06;
    scienceWing.add(roofB);
    campusGroup.add(scienceWing);

    // Building C: Innovation & Library Hub (Right)
    const libraryWing = new THREE.Group();
    libraryWing.position.set(14, 0, -2);
    const libBody = new THREE.Mesh(new THREE.BoxGeometry(8, 7.5, 12), buildingMatWhite);
    libBody.position.y = 3.75;
    libBody.castShadow = true;
    libraryWing.add(libBody);

    // Stepped terrace
    const terrace = new THREE.Mesh(new THREE.BoxGeometry(6, 3, 8), buildingMatPurple);
    terrace.position.set(0, 8.5, 0);
    terrace.castShadow = true;
    libraryWing.add(terrace);
    campusGroup.add(libraryWing);

    // ==========================================
    // 3. FLOATING GRADUATION CAPS (Mortarboards)
    // ==========================================
    const floatingCaps = [];
    const createGradCap = (x, y, z, scale = 1) => {
      const capGroup = new THREE.Group();

      // Top square board
      const boardGeo = new THREE.BoxGeometry(1.6 * scale, 0.08 * scale, 1.6 * scale);
      const capMat = new THREE.MeshStandardMaterial({
        color: '#1e1b4b',
        roughness: 0.4,
      });
      const board = new THREE.Mesh(boardGeo, capMat);
      capGroup.add(board);

      // Skull cap underneath
      const skullGeo = new THREE.CylinderGeometry(0.5 * scale, 0.55 * scale, 0.45 * scale, 16);
      const skull = new THREE.Mesh(skullGeo, capMat);
      skull.position.y = -0.25 * scale;
      capGroup.add(skull);

      // Golden Button on top
      const buttonGeo = new THREE.CylinderGeometry(0.08 * scale, 0.08 * scale, 0.1 * scale, 8);
      const goldMat = new THREE.MeshStandardMaterial({ color: '#fbbf24', metalness: 0.8, roughness: 0.2 });
      const button = new THREE.Mesh(buttonGeo, goldMat);
      button.position.y = 0.08 * scale;
      capGroup.add(button);

      // Tassel
      const tasselGeo = new THREE.CylinderGeometry(0.03 * scale, 0.08 * scale, 0.6 * scale, 8);
      const tassel = new THREE.Mesh(tasselGeo, goldMat);
      tassel.position.set(0.6 * scale, -0.2 * scale, 0.6 * scale);
      tassel.rotation.z = -0.3;
      capGroup.add(tassel);

      capGroup.position.set(x, y, z);
      scene.add(capGroup);

      floatingCaps.push({
        mesh: capGroup,
        baseY: y,
        speed: 1.2 + Math.random() * 0.8,
        rotSpeed: 0.01 + Math.random() * 0.015,
        offset: Math.random() * Math.PI * 2,
      });
    };

    createGradCap(-6, 9, 6, 1.1);
    createGradCap(7, 11, 4, 1.0);
    createGradCap(-3, 14, -2, 0.9);
    createGradCap(4, 13, -4, 1.2);
    createGradCap(0, 16, 2, 0.85);

    // ==========================================
    // 4. FLOATING BOOKS
    // ==========================================
    const floatingBooks = [];
    const createBook = (x, y, z, colorHex) => {
      const bookGroup = new THREE.Group();

      // Cover
      const coverGeo = new THREE.BoxGeometry(1.4, 0.25, 1.9);
      const coverMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
      const cover = new THREE.Mesh(coverGeo, coverMat);
      bookGroup.add(cover);

      // Pages
      const pagesGeo = new THREE.BoxGeometry(1.25, 0.2, 1.75);
      const pagesMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.7 });
      const pages = new THREE.Mesh(pagesGeo, pagesMat);
      pages.position.set(0.06, 0, 0);
      bookGroup.add(pages);

      bookGroup.position.set(x, y, z);
      scene.add(bookGroup);

      floatingBooks.push({
        mesh: bookGroup,
        baseY: y,
        speed: 1.0 + Math.random() * 0.6,
        rotY: 0.008 + Math.random() * 0.01,
        rotZ: 0.005 + Math.random() * 0.008,
        offset: Math.random() * Math.PI * 2,
      });
    };

    createBook(-8, 7, 8, '#2563eb');
    createBook(8, 8, 9, '#7c3aed');
    createBook(-9, 12, 1, '#059669');
    createBook(9, 13, 0, '#ea580c');

    // ==========================================
    // 5. FLOATING COMPUTERS / LAPTOPS
    // ==========================================
    const floatingLaptops = [];
    const createLaptop = (x, y, z) => {
      const laptopGroup = new THREE.Group();

      const silverMat = new THREE.MeshStandardMaterial({ color: '#94a3b8', metalness: 0.5, roughness: 0.3 });
      const screenMat = new THREE.MeshStandardMaterial({
        color: '#1e293b',
        emissive: '#3b82f6',
        emissiveIntensity: 0.4,
      });

      // Base keyboard chassis
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.2), silverMat);
      laptopGroup.add(base);

      // Screen lid tilted at 110 deg
      const screenLid = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.1, 0.06), screenMat);
      screenLid.position.set(0, 0.55, -0.6);
      screenLid.rotation.x = -0.25;
      laptopGroup.add(screenLid);

      laptopGroup.position.set(x, y, z);
      scene.add(laptopGroup);

      floatingLaptops.push({
        mesh: laptopGroup,
        baseY: y,
        speed: 0.9,
        rotY: 0.012,
        offset: Math.random() * Math.PI * 2,
      });
    };

    createLaptop(-4, 6.5, 10);
    createLaptop(5, 7.5, 11);

    // ==========================================
    // 6. FLOATING CALENDARS
    // ==========================================
    const floatingCalendars = [];
    const createCalendar = (x, y, z) => {
      const calGroup = new THREE.Group();

      // Calendar Backing
      const board = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.4, 0.08),
        new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.5 })
      );
      calGroup.add(board);

      // Top Red Banner
      const banner = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.35, 0.1),
        new THREE.MeshStandardMaterial({ color: '#ef4444' })
      );
      banner.position.set(0, 0.52, 0.01);
      calGroup.add(banner);

      // Spiral Rings
      for (let r = -0.4; r <= 0.4; r += 0.25) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.08, 0.02, 8, 16),
          new THREE.MeshStandardMaterial({ color: '#64748b', metalness: 0.8 })
        );
        ring.position.set(r, 0.72, 0.04);
        ring.rotation.y = Math.PI / 2;
        calGroup.add(ring);
      }

      calGroup.position.set(x, y, z);
      scene.add(calGroup);

      floatingCalendars.push({
        mesh: calGroup,
        baseY: y,
        speed: 1.1,
        rotY: 0.01,
        offset: Math.random() * Math.PI * 2,
      });
    };

    createCalendar(6, 10, 6);
    createCalendar(-7, 10.5, 4);

    // ==========================================
    // 7. FLOATING PROJECT ICONS / POLYHEDRA
    // ==========================================
    const floatingIcons = [];
    const iconGeos = [
      new THREE.IcosahedronGeometry(0.7, 0),
      new THREE.OctahedronGeometry(0.65, 0),
      new THREE.DodecahedronGeometry(0.65, 0),
    ];
    const iconColors = ['#38bdf8', '#c084fc', '#34d399'];

    for (let i = 0; i < 4; i++) {
      const geo = iconGeos[i % iconGeos.length];
      const mat = new THREE.MeshStandardMaterial({
        color: iconColors[i % iconColors.length],
        metalness: 0.3,
        roughness: 0.2,
        wireframe: i % 2 === 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / 4) * Math.PI * 2;
      const x = Math.cos(angle) * 11;
      const z = Math.sin(angle) * 9 + 4;
      mesh.position.set(x, 11 + Math.random() * 3, z);
      scene.add(mesh);
      floatingIcons.push({ mesh, rotX: 0.02, rotY: 0.02, speed: 1.5, baseY: mesh.position.y, offset: i });
    }

    // ==========================================
    // 8. ANIMATED STUDENT FIGURES ON CAMPUS
    // ==========================================
    const students = [];
    const createStudent = (x, z, shirtColor, pantColor) => {
      const studentGroup = new THREE.Group();

      // Head
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 16, 16),
        new THREE.MeshStandardMaterial({ color: '#fcd34d', roughness: 0.8 })
      );
      head.position.y = 1.7;
      studentGroup.add(head);

      // Torso
      const torso = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.75, 0.35),
        new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.6 })
      );
      torso.position.y = 1.15;
      torso.castShadow = true;
      studentGroup.add(torso);

      // Backpack
      const backpack = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.5, 0.22),
        new THREE.MeshStandardMaterial({ color: '#1e293b' })
      );
      backpack.position.set(0, 1.15, -0.24);
      studentGroup.add(backpack);

      // Legs
      const legGeo = new THREE.BoxGeometry(0.2, 0.75, 0.2);
      const legMat = new THREE.MeshStandardMaterial({ color: pantColor });
      const legL = new THREE.Mesh(legGeo, legMat);
      legL.position.set(-0.16, 0.4, 0);
      studentGroup.add(legL);

      const legR = new THREE.Mesh(legGeo, legMat);
      legR.position.set(0.16, 0.4, 0);
      studentGroup.add(legR);

      studentGroup.position.set(x, 0.1, z);
      campusGroup.add(studentGroup);

      students.push({
        group: studentGroup,
        legL,
        legR,
        initialX: x,
        initialZ: z,
        walkOffset: Math.random() * 10,
      });
    };

    createStudent(-2, 5, '#2563eb', '#1e293b');
    createStudent(2.5, 4, '#7c3aed', '#334155');
    createStudent(0, 8, '#059669', '#1e293b');
    createStudent(-4, 2, '#ea580c', '#475569');

    // ==========================================
    // 9. CAMPUS TREES & GREENERY
    // ==========================================
    const createTree = (x, z) => {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.3, 1.8, 8),
        new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.9 })
      );
      trunk.position.y = 0.9;
      trunk.castShadow = true;
      tree.add(trunk);

      const foliageMat = new THREE.MeshStandardMaterial({ color: '#10b981', roughness: 0.5 });
      const f1 = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2, 8), foliageMat);
      f1.position.y = 2.4;
      f1.castShadow = true;
      tree.add(f1);

      const f2 = new THREE.Mesh(new THREE.ConeGeometry(1.0, 1.6, 8), foliageMat);
      f2.position.y = 3.3;
      f2.castShadow = true;
      tree.add(f2);

      tree.position.set(x, 0, z);
      campusGroup.add(tree);
    };

    createTree(-6, -2);
    createTree(-8, 3);
    createTree(6, -2);
    createTree(8, 3);
    createTree(-4, -6);
    createTree(4, -6);

    // ==========================================
    // 10. FLOATING GLOWING PARTICLES
    // ==========================================
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const pColorChoices = [
      new THREE.Color('#38bdf8'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#facc15'),
      new THREE.Color('#60a5fa'),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 45;
      positions[i * 3 + 1] = Math.random() * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const c = pColorChoices[i % pColorChoices.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ==========================================
    // 11. MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 14;

    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX;
      mouseY = normY;
      targetCameraX = normX * 8;
      targetCameraY = 14 + normY * 3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    let clockTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clockTime += 0.016;

      // Smooth camera interpolation
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 4, 0);

      // Gentle auto-rotation of campus
      campusGroup.rotation.y = Math.sin(clockTime * 0.2) * 0.08;

      // Floating caps animation
      floatingCaps.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(clockTime * item.speed + item.offset) * 0.45;
        item.mesh.rotation.y += item.rotSpeed;
        item.mesh.rotation.z = Math.sin(clockTime * item.speed) * 0.1;
      });

      // Floating books animation
      floatingBooks.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(clockTime * item.speed + item.offset) * 0.35;
        item.mesh.rotation.y += item.rotY;
        item.mesh.rotation.x = Math.sin(clockTime * 0.8) * 0.15;
      });

      // Floating laptops animation
      floatingLaptops.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(clockTime * item.speed + item.offset) * 0.3;
        item.mesh.rotation.y += item.rotY;
      });

      // Floating calendars animation
      floatingCalendars.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(clockTime * item.speed + item.offset) * 0.35;
        item.mesh.rotation.y += item.rotY;
      });

      // Floating icons animation
      floatingIcons.forEach((item) => {
        item.mesh.position.y = item.baseY + Math.sin(clockTime * item.speed + item.offset) * 0.4;
        item.mesh.rotation.x += item.rotX;
        item.mesh.rotation.y += item.rotY;
      });

      // Students walking / idle bobbing
      students.forEach((s) => {
        const walkCycle = Math.sin(clockTime * 4 + s.walkOffset);
        s.legL.rotation.x = walkCycle * 0.4;
        s.legR.rotation.x = -walkCycle * 0.4;
        s.group.position.y = 0.1 + Math.abs(Math.sin(clockTime * 4 + s.walkOffset)) * 0.05;
      });

      // Floating particles rise
      const posArray = particleGeo.attributes.position.array;
      for (let p = 1; p < particleCount * 3; p += 3) {
        posArray[p] += 0.03;
        if (posArray[p] > 22) posArray[p] = 0;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeCampusScene;
