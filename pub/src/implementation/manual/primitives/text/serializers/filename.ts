import * as _p from 'pareto-core-serializer'
import * as _pinternals from 'pareto-core-internals'
import * as _pi from 'pareto-core-interface'

export type Signature = _pi.Text_Serializer

export const $$: Signature = ($) => {
    return _p.text.build(($i) => {
        _pinternals.list_from_text($, ($) => $).__for_each(($) => {
            if ($ === 36) { // $
                $i['add snippet'](`$$`)
            } else if ($ === 95) { // _
                $i['add snippet'](`$_`)
            } else if ($ === 32) { // space
                $i['add snippet'](`_`)    
            } else {
                $i['add character']($)
            }
        })
    })
}