import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Variables = (
    $$_: _i_in._T_Variables,
    $$_p: null,
) => _i_out._T_Variables<null>

export type _T_Module = (
    $$_: _i_in._T_Module,
    $$_p: null,
) => _i_out._T_Module<null>

export type _T_Module_Set = (
    $$_: _i_in._T_Module_Set,
    $$_p: null,
) => _i_out._T_Module_Set<null>

export type _T_Literal = (
    $$_: _i_in._T_Literal,
    $$_p: null,
) => _i_out._T_Literal<null>

export type _T_Initialization = (
    $$_: _i_in._T_Initialization,
    $$_p: null,
) => _i_out._T_Initialization<null>

export type _T_Selection = (
    $$_: _i_in._T_Selection,
    $$_p: null,
) => _i_out._T_Selection<null>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Variables = _T_Variables

export type Module = _T_Module

export type Module_Set = _T_Module_Set

export type Literal = _T_Literal

export type Initialization = _T_Initialization

export type Selection = _T_Selection

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Variables {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Variables
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Variables<null>
}

export namespace _T_Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Module<null>
}

export namespace _T_Module_Set {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module_Set
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Module_Set<null>
}

export namespace _T_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Literal
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Literal<null>
}

export namespace _T_Initialization {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Initialization
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Initialization<null>
}

export namespace _T_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Selection
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Selection<null>
}

// *** ALIASES FOR NESTED TYPES

export namespace Variables {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Variables
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Variables<null>
}

export namespace Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Module<null>
}

export namespace Module_Set {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module_Set
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Module_Set<null>
}

export namespace Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Literal
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Literal<null>
}

export namespace Initialization {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Initialization
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Initialization<null>
}

export namespace Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Selection
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
        export type annotation = null
    }
    export type RESULT = _i_out._T_Selection<null>
}
