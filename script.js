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

function actorsPlayedWith(actor, year_after) {
    const result = films.reduce(function(cur_array, cur_film) {
        if (cur_film.creationYear < year_after) return cur_array;
        if (cur_film.actors.every(function(cur_actor) {
            return cur_actor.name !== actor;
        })) return cur_array;

        const actors = cur_film.actors.filter(function(item, i, arr) {
            return item.name !== actor;
        }).map(function(cur_actor) {
            return cur_actor.name;
        });

        return cur_array.concat(actors);
    }, []);

    return result;
}

console.log("Сумма: " + calcByDirectorWithoutOscar('Christopher Nolan'));
console.log("Актеры: " + actorsPlayedWith('Tom Hanks', 1995));