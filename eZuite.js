document.addEventListener('DOMContentLoaded',()=>{

    const searchInput = document.querySelector('.filter-bar input');
    const tableRows = document.querySelectorAll('.user-table tbody tr');
    
    searchInput.addEventListener('input',function(){
        const searchTerm =this.value.toLowerCase();
        tableRows.forEach(row=>{
            const rowText = row.textContent.toLocaleLowerCase();
            row.computedStyleMap.display = rowText.includes(searchTerm) ? '':'none';        
        });
    });
    
});