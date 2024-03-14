var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    
    
    
    
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        event.preventDefault();
        performSearch();
    });

    function performSearch() {
        var searchTerm = document.getElementById('searchInput').value.toLowerCase();
        var searchResultsList = document.getElementById('searchResultsList');
        searchResultsList.innerHTML = ''; // Limpe os resultados anteriores

        var filmes = [
            { nome: 'Ate o Último Homem', link: 'https://jsvdev.online/web/projects/jsvflix/filmes.html' },
            { nome: 'Rota de Fuga 3', link: 'https://jsvdev.online/web/projects/jsvflix/filmes.html' },
            // Adicione mais filmes conforme necessário
        ];

        var results = filmes.filter(function (filme) {
            return filme.nome.toLowerCase().includes(searchTerm);
        });

        results.forEach(function (filme) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.href = filme.link;
            link.textContent = filme.nome;
            listItem.appendChild(link);
            searchResultsList.appendChild(listItem);
        });
    }
