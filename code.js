function dijkstra(graph, sourceNode) {
    // store distances traveled
    var distances = {};
    // store path traveled
    var previous = {};
    // keep track of which nodes have not yet been visited
    var unmarked = [];

    // first step of provided psuedocode, initialize distance to start node to 0 and distance to all other nodes to infinity
    for (let n in graph) {
        if (n == sourceNode) {
            distances[n] = 0;
        }
        else {
            distances[n] = Infinity;
        }
        // initialize each step in path (each previous node visited for every node) to null
        previous[n] = null;
        // push all nodes to unmarked as we have not yet visited any (chatGPT assisted)
        unmarked.push(n)
    }
    
    // loop as long as there are unmarked nodes
    while (unmarked.length > 0) {
        // initialize current node and shortest distance to null and infinity respectively
        let current = null;
        let shortestDist = Infinity;

        // loop over every unmarked node
        for (let i = 0; i < unmarked.length; i++) {
            let n = unmarked[i];
            // if distance to n is shorter than current shortest distance, replace shortest distance and change current node to n
            if (distances[n] < shortestDist) {
                shortestDist = distances[n]
                current = n
            }
        }
        
        // setup a graph of all nodes connected to our current node
        let connectedNodes = graph[current];
        // loop over all connected nodes
        for (let node in connectedNodes) {
            // if a connected node is unmarked, initialize a possible distance to distance to current node + distance from current to connected node (chatGPT assisted)
            if (unmarked.includes(node)) {
                let possibleDist = distances[current] + connectedNodes[node];
                // if possible distance is less than current distance for connected node, replace distance with possible distance, and set our current node as the previous node to connected node on our path (jesus christ)
                if (possibleDist < distances[node]) {
                    distances[node] = possibleDist;
                    previous[node] = current;
                }
            }
        }

        // mark current node (remove it from list of unmarked nodes) (chatGPT assisted)
        unmarked.splice(unmarked[current], 1);
    }

    // (chatGPT assisted)
    return {distances, previous};
}

// helper function used to reconstruct shortest path
function shortestPath(previous, destinationNode) {
    let path = [];
    let current = destinationNode;
    while (current != null) {
        // add current to front of path (chatGPT assisted)
        path.unshift(current);
        // set current to previous of current (node visited before current in original algorithm)
        current = previous[current];
    }
    return path;
}
