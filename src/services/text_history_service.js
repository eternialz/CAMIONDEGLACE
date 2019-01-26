export const TextHistoryService = {
    html: "",
    addText: (text, left) => {
        TextHistoryService.html += `<p class="text-${left ? 'left' : 'right'}">${text}</p>`;
    },
}