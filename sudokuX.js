const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sudokuX(puzzle) {
    const rows = {};
    const cols = {};

    // заполняем строки
    for (let i = 0; i < range.length; i++) {
        for (let j = 0; j < range.length; j++) {
            for (let k = 0; k < range.length; k++) {
                const r = [];
                const row = range[i];
                const col = range[j];
                const num = range[k];
                const quad = Math.floor((row - 1) / 3) * 3 + Math.floor((col - 1)/3) + 1;
                r.push([0, row, col], [1, row, num], [2, col, num], [3, quad, num]);

                rows[`${row}${col}${num}`] = r;
            }
        }
    }

    // заполняем столбцы
    for (let type = 0; type <= 3; type++) {
        for (let j = 0; j < range.length; j++) {
            for (let k = 0; k < range.length; k++) {
                const n1 = range[j];
                const n2 = range[k];
                cols[`${type}${n1}${n2}`] = [];
            }
        }
    }
    for (let key in rows) {
        const rk = key.split('');
        const rv = rows[key];
        rv.map((v) => cols[v.join('')] = rk)
    }

    // s - заготовка для ответа
    // для начала, туда надо внести те цифры, которые уже заполнены
    const s = [];
    for (let i = 0; i < range.length; i++) {
        for (let j = 0; j < range.length; j++) {
            if (puzzle[i, j] > 0) {
                const elt = [i, j, puzzle[i, j]];
                s.push(elt);
                // добавив клетку в решение, удаляем из матрицы все несовместимые элементы
                extractIntersects(rows, cols, elt)
            }
        }
    }

    success = algorithmX(rows, cols, s)


    // console.log('rows', rows, Object.keys(rows).length);
}

function algorithmX(rows, cols, s) {
    // function algorithm_x(rows, columns, cover = [])
    // if isempty(columns)
    //     return cover
    // else
    // # ищем столбец с минимальным числом элементов
    // m, c = findmin(Dict(k => length(v) for (k, v) in columns))
    // for subset in collect(columns[c])
    //         push!(cover, subset)
    // # удаляем пересекающиеся подмножества и
    // # содержащиеся в subset элементы
    // buf_cols = extract_intersects!(rows, columns, subset)
    // s = algorithm_x(rows, columns, cover)
    // # если нашлось непустое решение - готово, выходим
    // s == nothing || return s
    // restore_intersects!(rows, columns, subset, buf_cols)
    // pop!(cover)
    // end
    // # сюда дойдём либо если в columns[c] пусто,
    // # либо когда рекурсивный поиск не нашёл решения
    // return nothing
    // end
    // end
}

function extractIntersects(rows, cols, elt) {
    // function extract_intersects!(rows, columns, base_row)
    // buf = []
    // for elt in rows[base_row]
    // # вынимаем текущий столбец из таблицы в буфер
    // push!(buf, pop!(columns, elt))
    // # удаляем все пересекающиеся строки из всех оставшихся столбцов
    // for intersecting_row in buf[end]
    //         for other_elt in rows[intersecting_row]
    //             if other_elt != elt
    //                 delete !(columns[other_elt], intersecting_row)
    // end
    // end
    // end
    // end
    // return buf
    // end
}

function restoreIntersects(rows, cols, elt) {
    // function restore_intersects!(rows, columns, base_row, buf)
    // # удаляли столбцы от первого пересечения с base_row к последнему, восстанавливать надо в обратном порядке
    // for elt in Iterators.reverse(rows[base_row])
    //     columns[elt] = pop!(buf)
    // for added_row in columns[elt]
    //         for col in rows[added_row]
    //             push!(columns[col], added_row)
    // end
    // end
    // end
    // end
}