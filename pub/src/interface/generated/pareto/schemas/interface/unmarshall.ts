import * as _et from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Imports = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Imports<_i_in._T_Range>

export type _T_Module = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Module<_i_in._T_Range>

export type _T_Module_Set = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Module_Set<_i_in._T_Range>

export type _T_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type<_i_in._T_Range>

export type _T_Type_Arguments = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Arguments<_i_in._T_Range>

export type _T_Type_Parameter_Selection = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Parameter_Selection<_i_in._T_Range>

export type _T_Type_Parameters = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Parameters<_i_in._T_Range>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Imports = _T_Imports

export type Module = _T_Module

export type Module_Set = _T_Module_Set

export type Type = _T_Type

export type Type_Arguments = _T_Type_Arguments

export type Type_Parameter_Selection = _T_Type_Parameter_Selection

export type Type_Parameters = _T_Type_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Imports<_i_in._T_Range>
}

export namespace _T_Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Module<_i_in._T_Range>
}

export namespace _T_Module_Set {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Module_Set<_i_in._T_Range>
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
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type<_i_in._T_Range>
}

export namespace _T_Type_Arguments {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Arguments<_i_in._T_Range>
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Parameter_Selection<_i_in._T_Range>
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Parameters<_i_in._T_Range>
}

// *** ALIASES FOR NESTED TYPES

export namespace Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Imports<_i_in._T_Range>
}

export namespace Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Module<_i_in._T_Range>
}

export namespace Module_Set {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Module_Set<_i_in._T_Range>
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
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type<_i_in._T_Range>
}

export namespace Type_Arguments {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Arguments<_i_in._T_Range>
}

export namespace Type_Parameter_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Parameter_Selection<_i_in._T_Range>
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Parameters<_i_in._T_Range>
}
