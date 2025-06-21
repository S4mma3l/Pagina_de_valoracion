document.addEventListener('DOMContentLoaded', () => {

    // NUEVO: Reinicia todos los formularios al cargar la página
    // Esto soluciona el problema de que los valores se queden guardados al recargar.
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        form.reset();
    });

    // Lógica existente para el funcionamiento de las pestañas
    const tabs = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.getElementById(tab.dataset.tab);

            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            target.classList.add('active');
        });
    });
});