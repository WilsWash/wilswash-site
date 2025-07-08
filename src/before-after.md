---
layout: layout.njk
title: Before and Afters
---

<body>
    <section id="hero">
        <h2>Everyones favorite part...</h2>
        <h2>The pictures</h2>
    </section>
    <main>
        <section id="gallery-befores" class="gallery-section">
            <h2>Before</h2>
            <div class="gallery" id="insert-befores"></div>
        </section>
        <section id="gallery-afters" class="gallery-section">
            <h2>After</h2>
            <div class="gallery" id="insert-afters"></div>
        </section>
        <section id="gallery-others" class="gallery-section">
            <h2>Other Work</h2>
            <div class="gallery" id="insert-others"></div>
        </section>
    </main>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const loadGallery = (id, file) => {
            fetch(file)
                .then(res => {
                if (!res.ok) throw new Error(`Failed to load ${file}`);
                return res.text();
                })
                .then(html => {
                document.getElementById(id).innerHTML = html;
                })
                .catch(err => {
                console.error(err);
                document.getElementById(id).innerHTML = "<p>Gallery failed to load.</p>";
                });
            };
            loadGallery("insert-befores", "/gallery-befores.html");
            loadGallery("insert-afters", "/gallery-afters.html");
            loadGallery("insert-others", "/gallery-others.html");
        });
        </script>
</body>