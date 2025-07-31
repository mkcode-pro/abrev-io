import { useState } from "react"
import { Save, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { ProfileEditor } from "@/components/biolink-editor/ProfileEditor"
import { LinksManager } from "@/components/biolink-editor/LinksManager"
import { BioLinkPreview, UserData } from "@/components/biolink-editor/BioLinkPreview"
import { LinkData } from "@/components/biolink-editor/SortableLinkItem"

// Mock user data
const initialUserData: UserData = {
  name: "João Silva",
  username: "joaosilva",
  bio: "Transformando ideias em conteúdo que inspira",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
}

// Mock links data
const initialLinks: LinkData[] = [
  { id: '1', title: 'Instagram', subtitle: 'Conteúdo diário e stories', url: 'https://instagram.com/joaosilva', iconId: 'instagram' },
  { id: '2', title: 'WhatsApp Business', subtitle: 'Fale comigo diretamente', url: 'https://wa.me/5511999999999', iconId: 'whatsapp' },
  { id: '3', title: 'YouTube', subtitle: 'Vídeos e tutoriais', url: 'https://youtube.com/joaosilva', iconId: 'youtube' },
  { id: '4', title: 'Site Pessoal', subtitle: 'Portfolio e blog', url: 'https://joaosilva.com', iconId: 'website' }
]


export default function BioLinkEditor() {
  const [userData, setUserData] = useState(initialUserData)
  const [links, setLinks] = useState(initialLinks)
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit')
  const [isSaving, setIsSaving] = useState(false)

  const handleUserDataUpdate = (updates: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...updates }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    toast.success("Alterações salvas com sucesso!")
  }

  const handlePreview = () => {
    window.open(`/joaosilva`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Mobile Tab Navigation */}
      <div className="lg:hidden flex bg-glass border-b border-white/10">
        <button
          onClick={() => setActiveTab('edit')}
          className={`flex-1 p-4 text-center font-medium transition-colors ${
            activeTab === 'edit' 
              ? 'text-neon-blue border-b-2 border-neon-blue' 
              : 'text-white/60'
          }`}
        >
          Editar
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 p-4 text-center font-medium transition-colors ${
            activeTab === 'preview' 
              ? 'text-neon-blue border-b-2 border-neon-blue' 
              : 'text-white/60'
          }`}
        >
          Preview
        </button>
      </div>

      <div className="flex h-screen">
        {/* Editor Panel */}
        <div className={`flex-1 p-6 overflow-auto ${activeTab !== 'edit' ? 'hidden lg:block' : ''}`}>
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Editor de Bio Link</h1>
                <p className="text-white/60">Personalize sua página de links</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handlePreview}
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Visualizar
                </Button>
                <Button 
                  onClick={handleSave}
                  variant="gradient" 
                  className="btn-futuristic"
                  disabled={isSaving}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? 'Salvando...' : 'Salvar'}
                </Button>
              </div>
            </div>

            {/* Profile Settings */}
            <ProfileEditor
              userData={userData}
              onUpdate={handleUserDataUpdate}
            />

            {/* Links Management */}
            <LinksManager
              links={links}
              onLinksChange={setLinks}
            />
          </div>
        </div>

        {/* Preview Panel */}
        <div className={`w-full lg:w-96 p-6 border-l border-white/10 ${activeTab !== 'preview' ? 'hidden lg:block' : ''}`}>
          <BioLinkPreview userData={userData} links={links} />
        </div>
      </div>
    </div>
  )
}