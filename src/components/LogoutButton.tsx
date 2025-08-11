import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface LogoutButtonProps {
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
    className = "",
    variant = "outline",
    size = "sm"
}) => {
    const { logout } = useAuth();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
        }
    };

    return (
        <Button
            onClick={handleLogout}
            variant={variant}
            size={size}
            className={`flex items-center space-x-2 ${className}`}
        >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
        </Button>
    );
};

export default LogoutButton;