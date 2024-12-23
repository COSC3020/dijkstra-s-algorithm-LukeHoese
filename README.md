# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

I chose to use an adjaceny list object where each node is its own key, containing within key value pairs of neighbor nodes and their weights. I chose this data structure at the recommendation of chatGPT

All code was hand typed by me. ChatGPT was used for assistance and debugging, particularly with the best syntax to use when working with certain data structures. All lines that were aided by ChatGPT are marked as such in comments.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.o

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The time complexity of my implementation is $\Theta$(V<sup>2</sup>), quadratic with respect to number of vertices. The dominant part of the code as far as time complexity is the for loop nested in the while loop. The outer while loop iterates over all vertices ($\Theta$(V)), and the inner for loop iterates over all unmarked vertices ($\Theta$(V)) for every iteration of the outerloop, giving a final time complexity of $\Theta$(V<sup>2</sup>)
