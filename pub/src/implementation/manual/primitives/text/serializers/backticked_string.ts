import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-serializer'

import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/escaped_character"

export type Signature = _pi.Text_Serializer

export const $$: Signature = ($) => '`'
    + s_escaped_character(
        $,
        {
            'character code': 96, // `
            'escape character code': 92, // \

        }
    )
    + '`' 