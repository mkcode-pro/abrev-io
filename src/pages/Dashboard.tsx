import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/AppSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { MobileBottomNav } from "@/components/dashboard/MobileBottomNav"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { BiolinksGrid } from "@/components/dashboard/BiolinksGrid"
import { UrlShortenerCard } from "@/components/dashboard/UrlShortenerCard"
import { MobileLayout } from "@/components/layout/MobileLayout"
import { ResponsiveContainer } from "@/components/layout/ResponsiveContainer"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

// Mock data
const userData = {
  name: "João Silva",
  username: "@joaosilva",
  bio: "Criador de conteúdo digital",
  avatar: "JS"
}

export default function Dashboard() {
  const isMobile = useIsMobile()

  return (
    <SidebarProvider>
      <MobileLayout 
        hasBottomNav={isMobile} 
        className="min-h-screen flex w-full bg-gradient-hero"
      >
        {/* Desktop Sidebar */}
        {!isMobile && <AppSidebar />}
        
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <DashboardHeader userName={userData.name} />

          {/* Content */}
          <ResponsiveContainer 
            size="xl" 
            padding={isMobile ? "md" : "lg"}
            className="space-y-6"
          >
            {/* Quick Actions - Hidden on mobile, replaced by bottom nav */}
            {!isMobile && (
              <section className="animate-fade-in">
                <h2 className="text-xl font-semibold text-foreground mb-4">Ações Rápidas</h2>
                <QuickActions />
              </section>
            )}

            {/* Statistics */}
            <section className="animate-fade-in">
              <h2 className={cn(
                "font-semibold text-foreground mb-4",
                isMobile ? "text-lg" : "text-xl"
              )}>
                Estatísticas
              </h2>
              <StatsCards />
            </section>

            {/* Biolinks */}
            <section className="animate-fade-in">
              <BiolinksGrid />
            </section>

            {/* URL Shortener */}
            <section className="animate-fade-in">
              <UrlShortenerCard />
            </section>
          </ResponsiveContainer>
        </main>

        {/* Mobile Bottom Navigation */}
        {isMobile && <MobileBottomNav />}
      </MobileLayout>
    </SidebarProvider>
  )
}