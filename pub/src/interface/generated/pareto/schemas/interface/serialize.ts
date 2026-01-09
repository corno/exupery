import * as _pi from 'pareto-core-interface'

import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Type_Arguments = (
    $$_: _i_in._T_Type_Arguments,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Imports = (
    $$_: _i_in._T_Imports,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Type_Parameters = (
    $$_: _i_in._T_Type_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Module = (
    $$_: _i_in._T_Module,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Module_Set = (
    $$_: _i_in._T_Module_Set,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Type_Parameter_Selection = (
    $$_: _i_in._T_Type_Parameter_Selection,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Type = (
    $$_: _i_in._T_Type,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Type_Arguments = _T_Type_Arguments

export type Imports = _T_Imports

export type Type_Parameters = _T_Type_Parameters

export type Module = _T_Module

export type Module_Set = _T_Module_Set

export type Type_Parameter_Selection = _T_Type_Parameter_Selection

export type Type = _T_Type

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Type_Arguments {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Arguments
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Imports
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Module_Set {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module_Set
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Parameter_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
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
    export type RESULT = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Type_Arguments {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Arguments
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Imports
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Type_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Module {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Module_Set {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Module_Set
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Type_Parameter_Selection {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Type_Parameter_Selection
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
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
    export type RESULT = string
}
