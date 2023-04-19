---
sidebar_position: 0
description: Minima uses an algorithm inspired by Bellman Ford
---

# Routing Mechanism

## Overview

Minima is a trade router designed to help traders navigate multiple exchanges, optimizing their trades by finding the most cost-effective route between a given pair of tokens. Minima's core route-finding algorithm is based heavily on the Bellman-Ford algorithm, a graph-based algorithm traditionally used for finding the shortest path in a weighted directed graph with potential negative weight cycles.

In Minima's context, we represent the trading landscape as a weighted directed graph with the following components:

- Nodes (N): Tokens.
- Edges (E): Trade pairs between tokens (i and j) on a specific exchange (x).

It is essential to note that multiple edges can exist between the same pair of tokens, as long as they correspond to different exchanges.

## Graph Representation

To represent the trading landscape, we define the graph G(N, E), where N is the set of nodes (tokens) and E is the set of edges (trade pairs). Each edge Eijx is associated with a weight Wijx, which represents the trading cost of the pair (i, j) on exchange x. The weight can be derived from factors such as price, liquidity, and fees.

## Bellman-Ford Algorithm

The Bellman-Ford algorithm is used to find the shortest path between a source node and all other nodes in the graph. The algorithm is designed to handle negative weight cycles, making it well-suited for Minima's trade routing problem.

Here is a high-level overview of the algorithm:

1. Initialize all node distances to infinity, except for the source node, which has a distance of 0.
2. Relax all edges |V|-1 times, where |V| is the number of vertices in the graph. Relaxing an edge means updating the distance to the destination node if a shorter path is found.
3. Check for negative weight cycles by relaxing all edges one more time. If any distance is updated, it indicates a negative weight cycle.

## Implementation in Minima

Minima utilizes the Bellman-Ford algorithm to find the most cost-effective trading route between tokens in the graph. The algorithm is applied with slight modifications to accommodate trading-specific factors such as slippage and fees.

To execute a trade between tokens i and j, Minima performs the following steps:

1. Construct the graph G(N, E) using the current market data from multiple exchanges.
2. Choose the token i as the source node.
3. Run the Bellman-Ford algorithm to find the shortest path from i to all other nodes.
4. Identify the shortest path from i to j.
5. Execute the trade along the identified path, considering slippage and fees.

By leveraging the Bellman-Ford algorithm, Minima can efficiently route trades across multiple exchanges, ensuring optimal execution and minimizing trading costs.

## Exceptions

For smaller trade graphs, or on chains where Minima does not get enough use to be constantly running, routes are calculated by a simple BFS with pruning algorithm. In this algorithm, a branch in the search tree is pruned if it yields less of a specific token than another branch.
