package Banking_management_backend.bank.util;

import org.springframework.stereotype.Component;

@Component
public class AccessControl {

    // Simple access control logic (e.g., role-based control)
    public boolean hasAccess(String userRole, String action) {
        // Implement access control logic based on roles (Admin, User)
        if (userRole.equals("Admin")) {
            return true; // Admin has full access
        } else if (userRole.equals("User") && action.equals("view")) {
            return true; // Users can view but cannot modify
        }
        return false; // Other actions are restricted
    }
}




// package Banking_management_backend.bank.util;

// import org.springframework.stereotype.Component;

// @Component
// public class AccessControl {

//     // Simple role-based access check
//     public boolean hasAccess(String role, String action) {
//         switch (role.toLowerCase()) {
//             case "admin":
//                 // Admin has access to everything
//                 return true;
//             case "user":
//                 // Users have access to account operations but not admin functions
//                 return !action.equals("admin");
//             default:
//                 return false;
//         }
//     }
// }

