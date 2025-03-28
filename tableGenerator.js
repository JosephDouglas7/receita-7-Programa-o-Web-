/**
 * Gera dinamicamente uma tabela HTML.
 * @param {Array} data - Array de objetos representando os dados.
 * @param {Array} headers - Títulos das colunas. Exemplo: ["Nome", "Idade"].
 * @param {Array} properties - Propriedades dos objetos representadas nas colunas. Exemplo: ["name", "age"].
 * @param {string} targetId - ID do elemento onde a tabela será exibida.
 */
export function generateTable(data, headers, properties, targetId) {
    const container = document.getElementById(targetId);

    if (!container) {
        console.error(`Elemento com o ID "${targetId}" não encontrado.`);
        return;
    }

    // Criação do HTML da tabela
    let tableHtml = `
        <table border="1" style="border-collapse: collapse; margin: 20px auto; width: 80%; text-align: center; font-family: Arial, sans-serif;">
            <thead>
                <tr>
                    ${headers.map(header => `<th style="background-color: #4CAF50; color: white; padding: 10px;">${header}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${data.map(item => `
                    <tr>
                        ${properties.map(prop => `<td style="padding: 10px;">${item[prop] || "N/A"}</td>`).join("")}
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;

    // Insere o HTML no container especificado
    container.innerHTML = tableHtml;
}
