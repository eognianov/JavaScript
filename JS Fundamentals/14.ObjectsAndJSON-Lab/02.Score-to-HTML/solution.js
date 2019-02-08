function solve(input) {
    let array = JSON.parse(input);

    console.log('<table>');
    console.log('  <tr><th>name</th><th>score</th></tr>');
    for (let item of array) {
        console.log(`   <tr><td>${escapeHtml(item.name)}</td><td>${item.score}</td></tr>`);
    }
    console.log('</table>');

    function escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');