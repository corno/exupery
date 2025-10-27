import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Directory = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Directory

export type _T_Expression = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Expression

export type _T_Group = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Group

export type _T_Group_Part = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Group_Part

export type _T_Line = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Line

export type _T_Line_Part = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Line_Part

export type _T_Lines = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Lines

export type _T_Statements = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Statements

export type _T_String_Literal = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_String_Literal

export type _T_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Directory = _T_Directory

export type Expression = _T_Expression

export type Group = _T_Group

export type Group_Part = _T_Group_Part

export type Line = _T_Line

export type Line_Part = _T_Line_Part

export type Lines = _T_Lines

export type Statements = _T_Statements

export type String_Literal = _T_String_Literal

export type Type = _T_Type

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Directory
}

export namespace _T_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Expression
}

export namespace _T_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group
}

export namespace _T_Group_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group_Part
}

export namespace _T_Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Line
}

export namespace _T_Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Line_Part
}

export namespace _T_Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Lines
}

export namespace _T_Statements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Statements
}

export namespace _T_String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_String_Literal
}

export namespace _T_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Type
}

// *** ALIASES FOR NESTED TYPES

export namespace Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Directory
}

export namespace Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Expression
}

export namespace Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group
}

export namespace Group_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group_Part
}

export namespace Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Line
}

export namespace Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Line_Part
}

export namespace Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Lines
}

export namespace Statements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Statements
}

export namespace String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_String_Literal
}

export namespace Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Type
}
