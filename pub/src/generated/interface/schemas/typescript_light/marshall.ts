import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Directory = (
    $$_: _i_in._T_Directory,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Expression = (
    $$_: _i_in._T_Expression,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Group = (
    $$_: _i_in._T_Group,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Group_Part = (
    $$_: _i_in._T_Group_Part,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Line = (
    $$_: _i_in._T_Line,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Line_Part = (
    $$_: _i_in._T_Line_Part,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Lines = (
    $$_: _i_in._T_Lines,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Statements = (
    $$_: _i_in._T_Statements,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_String_Literal = (
    $$_: _i_in._T_String_Literal,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Type = (
    $$_: _i_in._T_Type,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

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
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Expression
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Group_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lines
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Statements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Statements
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Literal
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Expression {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Expression
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Group_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lines
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Statements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Statements
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace String_Literal {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Literal
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
