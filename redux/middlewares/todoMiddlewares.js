import { CREATE_TASK } from "../types"

export function tasksTextMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_TASK) {
                const {title, body, id} = action.payload
                const forbidden = ['php', 'wordpress']
                const find = forbidden.filter(w => {
                    return (title.includes(w) || body.includes(w))
                })

                if (find.length) return console.log('NOOOOO');

            }
            return next(action)
        }
    }
}