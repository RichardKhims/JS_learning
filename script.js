//@ts-check

function calcByDirectorWithoutOscar(director) {
    const result = films.reduce(function(res_obj, current) {
        if (current.director.oscarsCount) return res_obj;
        if (current.director.name !== director) return res_obj;

        const cur_obj = current.actors.reduce(function(obj, cur_actor) {
            if (isNaN(obj['sum_age'])) obj['sum_age'] = 0;
            if (isNaN(obj['count'])) obj['count'] = 0;

            obj['sum_age'] += cur_actor.age;
            obj['count'] ++;
            
            return obj;
        }, {}); 

        if (isNaN(res_obj['sum_age'])) res_obj['sum_age'] = 0;
        if (isNaN(res_obj['count'])) res_obj['count'] = 0;

        res_obj['sum_age'] += cur_obj['sum_age'];
        res_obj['count'] += cur_obj['count'];

        console.log(res_obj);
        return res_obj;
    }, {});

    return result['sum_age']/result['count'];
}

console.log("Сумма: " + calcByDirectorWithoutOscar('Christopher Nolan') + "\n");