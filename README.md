# Discord Ticket Bot Commands

This document explains the commands available for the Discord Ticket Bot and how to use them effectively to manage support tickets on your server.

## Commands

### /setup

**Description:**  
Initializes and sets up the ticket system in the server.

**Usage:**  
`/setup`

This command will configure the necessary channels and permissions required for the ticket system to function properly.

---

### /add-support

**Description:**  
Adds a support role to the ticket system.

**Usage:**  
`/add-support <RoleName>`

**Parameters:**
- `<RoleName>`: The name of the role to be added as support.

This command allows you to designate a specific role as a support role, giving members of this role the ability to manage tickets.

---

### /remove-support

**Description:**  
Removes a support role from the ticket system.

**Usage:**  
`/remove-support <RoleName>`

**Parameters:**
- `<RoleName>`: The name of the role to be removed from support.

This command will revoke the support capabilities from the specified role.

---

### /list-support

**Description:**  
Lists all support roles currently assigned in the ticket system.

**Usage:**  
`/list-support`

This command provides a list of all roles that have been designated as support roles within the ticket system.

---

### /add-user

**Description:**  
Adds another user to a specific ticket.

**Usage:**  
`/add-user <UserName>`

**Parameters:**
- `<UserName>`: The username of the user to be added to the ticket.

Use this command to give another user access to a particular ticket, allowing them to participate in the support conversation.

---

### /remove-user

**Description:**  
Removes a user from a specific ticket.

**Usage:**  
`/remove-user <UserName>`

**Parameters:**
- `<UserName>`: The username of the user to be removed from the ticket.

This command will remove a user's access to the specified ticket.

---

### /status

**Description:**  
Provides the status of all tickets in the server.

**Usage:**  
`/status`

This command will display the current status of all open tickets, helping you keep track of ongoing support issues.

---

With these commands, you can effectively manage support tickets on your Discord server, ensuring a smooth and organized support process.
