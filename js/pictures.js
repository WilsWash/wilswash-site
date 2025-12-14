

document.addEventListener("DOMContentLoaded", () => {
    console.log('1');
    fetch('/images.json')
        .then(response => response.json())
        .then(data => {
            const befores = data.befores;
            const afters = data.afters;
            const others = data.others;

            const beforeContainer = document.getElementById('insert-befores');
            const afterContainer = document.getElementById('insert-afters');
            const otherContainer = document.getElementById('insert-others');

            befores.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.classList.add('before-img');
                beforeContainer.appendChild(img);
            });

            afters.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.classList.add('after-img');
                afterContainer.appendChild(img);
            });

            others.forEach(src => {
                console.log(src);
                const img = document.createElement('img');
                img.src = src;
                img.classList.add('others');
                otherContainer.appendChild(img);
            })
        });
});


// document.addEventListener("DOMContentLoaded", async () => {
//     try {
//         const response = await fetch('/images.json');
//         const data = await response.json();

//         const beforeContainer = document.getElementById('insert-befores');
//         const afterContainer  = document.getElementById('insert-afters');
//         const otherContainer  = document.getElementById('insert-others');

//         data.befores.forEach(src =>
//             beforeContainer.appendChild(createImage(src, 'before-img'))
//         );

//         data.afters.forEach(src =>
//             afterContainer.appendChild(createImage(src, 'after-img'))
//         );

//         data.others.forEach(src =>
//             otherContainer.appendChild(createImage(src, 'others'))
//         );

//     } catch (err) {
//         console.error("Failed to load images.json", err);
//     }
// });

