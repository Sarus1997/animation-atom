const atoms = document.querySelectorAll('.atom');

atoms.forEach(atom => {
    atom.addEventListener('mouseover', () => {
        // สุ่มสีใหม่เมื่อเมาส์ผ่านไป
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        atom.style.backgroundColor = randomColor;

        // สุ่มทิศทางและความเร็ว
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        const randomSpeed = Math.random() * 5 + 1;

        // เพิ่ม animation ให้เคลื่อนที่
        atom.style.animation = `move ${randomSpeed}s linear infinite`;

        // เพิ่ม keyframes ให้เคลื่อนที่
        atom.style.animationName = `move-${randomX}-${randomY}`;
    });

    // เพิ่ม keyframes ให้เคลื่อนที่
    atom.style.keyframes = {
        [`@keyframes move-${randomX}-${randomY}`]: {
            '0%': {
                transform: `translate(${randomX}px, ${randomY}px)`,
            },
            '100%': {
                transform: `translate(${randomX + 100}px, ${randomY + 100}px)`,
            },
        },
    };
});

