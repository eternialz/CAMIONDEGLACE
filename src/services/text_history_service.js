export const TextHistoryService = {
    html: "",
    addText: (text, left = true) => {
        TextHistoryService.html += `<p class="text-${left ? 'left' : 'right'}">${text}</p>`;
    },
}