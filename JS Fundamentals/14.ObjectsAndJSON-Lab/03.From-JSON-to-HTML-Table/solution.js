function solve(input) {
    let array = JSON.parse(input);
    let keys = Object.keys(array[0]);

    let html = '<table>\n';
    html += '   <tr>';
    for (let key of keys) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';

    for (let obj of array) {
        html += "   <tr>";
        for (let i = 0; i < keys.length; i++) {
            html += `<td>${escapeHtml(obj[keys[i]] + "")}</td>`;
        }
        html += "</tr>\n";
    }
    html += "</table>\n";
    console.log(html);

    function escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');