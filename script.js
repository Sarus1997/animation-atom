const atoms = document.querySelectorAll('.atom');

atoms.forEach(atom => {
    atom.addEventListener('mouseover', () => {
        // สุ่มสีใหม่เมื่อเมาส์ผ่านไป
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        atom.style.backgroundColor = randomColor;
    });
});
