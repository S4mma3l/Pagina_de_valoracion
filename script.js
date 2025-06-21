document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Obtener el ID del contenido de la pestaña desde el atributo data-tab
            const target = document.getElementById(tab.dataset.tab);

            // Quitar la clase 'active' de todas las pestañas y paneles
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Añadir la clase 'active' a la pestaña y panel seleccionados
            tab.classList.add('active');
            target.classList.add('active');
        });
    });
});