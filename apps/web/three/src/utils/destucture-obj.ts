export const filterMeshFromNodes = (nodes) => {
    const res = [];

    Object.keys(nodes).forEach(key => {
        const result = destructureGlbObject(nodes[key]);
        res.push(...result);
    })

    return res;
}

export const destructureGlbObject = (node) => {
    const result = [];
    const stack = [node];

    while(stack.length > 0) {
        const {target, rest} = filterChildren(stack.pop());
        result.push(...target);
        stack.push(...rest);
    }

    return result;
}

const filterChildren = (value) => {
    if (value && value.children) {
        const target = [];
        const rest = [];

        value.children.forEach(child => {
            if (child.isMesh) {
                target.push(child);
            } else {
                rest.push(child);
            }
        })
        
        return {target, rest};
    }
    return {target: [], rest: []};
}
