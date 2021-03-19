window.onload = () => {
    // onclick event handlers
    document.getElementById("shuffle").onclick = shuffle;
    document.getElementById("sort").onclick = sortNodes;

    let list = document.getElementById("shuffleAndSort");

    function shuffle() {
        let nodes = list.children;
        nodes = Array.prototype.slice.call(nodes);

        // Shuffle the elements
        for (let i = 9; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = nodes[i];
            nodes[i] = nodes[j];
            nodes[j] = temp;
        }

        let i = 1;
        while (i < nodes.length) {
            list.appendChild(nodes[i]);
            i++;
        }
    }

    function sortNodes() {
        let nodes = document.getElementById("shuffleAndSort");
        nodes.innerHTML = '';

        for (let i = 1; i < 10; i++) {
            let childElement = document.createElement("li");
            childElement.classList.add(`li-${i}`);
            childElement.innerHTML = i;
            nodes.appendChild(childElement);
        }
    }
}