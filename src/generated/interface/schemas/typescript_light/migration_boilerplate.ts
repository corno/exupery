import * as _pt from 'exupery-core-types'

import * as _i_in from "./resolved"
import * as _i_out from "./unresolved"

// **** TYPES

export type _T_Expression = (
    $$_: _i_in._T_Expression,
    $$_p: null,
) => _i_out._T_Expression

export type _T_Statements = (
    $$_: _i_in._T_Statements,
    $$_p: null,
) => _i_out._T_Statements

export type _T_String_Literal = (
    $$_: _i_in._T_String_Literal,
    $$_p: null,
) => _i_out._T_String_Literal

export type _T_Type = (
    $$_: _i_in._T_Type,
    $$_p: null,
) => _i_out._T_Type

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Expression = _T_Expression

export type Statements = _T_Statements

export type String_Literal = _T_String_Literal

export type Type = _T_Type

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Expression
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Expression
}

export namespace _T_Statements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Statements
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Statements
}

export namespace _T_String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Literal
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_String_Literal
}

export namespace _T_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Type
}

// *** ALIASES FOR NESTED TYPES

export namespace Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Expression
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Expression
}

export namespace Statements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Statements
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Statements
}

export namespace String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Literal
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_String_Literal
}

export namespace Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Type
}
