from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # DAG check using Kahn's algorithm
    in_degree = {node['id']: 0 for node in nodes}
    dependents = {node['id']: [] for node in nodes}
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        if target in in_degree:
            in_degree[target] += 1
        if source in dependents:
            dependents[source].append(target)
    
    queue = [nid for nid, deg in in_degree.items() if deg == 0]
    visited = 0
    
    while queue:
        node = queue.pop(0)
        visited += 1
        for dep in dependents[node]:
            in_degree[dep] -= 1
            if in_degree[dep] == 0:
                queue.append(dep)
    
    is_dag = visited == num_nodes
    
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}