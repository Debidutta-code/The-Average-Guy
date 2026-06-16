import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  Users,
  LogOut,
  PlusCircle,
  PhoneCall,
  Menu,
  X,
  BarChart3
} from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'All Leads', href: '/leads', icon: Users },
    { name: 'Today', href: '/today', icon: PhoneCall },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar for Desktop */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r bg-background lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-6">
            <Link to="/" className="flex items-center gap-2 font-bold text-primary text-xl">
              <PhoneCall className="h-6 w-6" />
              <span>LeadCRM</span>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t p-4">
             <div className="mb-4 flex items-center gap-3 px-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                {user?.name?.[0].toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium">{user?.name}</p>
                <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 lg:hidden">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary">
          <PhoneCall className="h-6 w-6" />
          <span>LeadCRM</span>
        </Link>
        <div className="flex items-center gap-2">
            <Link to="/leads/new">
                <Button size="icon" variant="ghost">
                    <PlusCircle className="h-6 w-6 text-primary" />
                </Button>
            </Link>
            <Button size="icon" variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex flex-col h-full">
            <div className="flex h-16 items-center justify-between border-b px-4">
                <Link to="/" className="flex items-center gap-2 font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <PhoneCall className="h-6 w-6" />
                    <span>LeadCRM</span>
                </Link>
                <Button size="icon" variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                </Button>
            </div>
            <nav className="flex-1 space-y-2 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-4 rounded-lg px-4 py-3 text-lg font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="border-t p-6">
                <Button
                    variant="destructive"
                    className="w-full justify-center gap-3"
                    onClick={handleLogout}
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        "lg:pl-64"
      )}>
        <div className="container mx-auto p-4 lg:p-8 max-w-7xl">
          {children}
        </div>
      </main>

      {/* Mobile Sticky Add Button */}
      <Link
        to="/leads/new"
        className="fixed bottom-6 right-6 z-30 lg:hidden shadow-lg rounded-full bg-primary p-4 text-primary-foreground hover:scale-110 transition-transform active:scale-95"
      >
        <PlusCircle className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default Layout;
