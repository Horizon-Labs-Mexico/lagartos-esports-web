import { MessageCircle, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const CommunitySidebar = () => {
  const discussions = [
    {
      title: "Análisis del último partido vs Dragones",
      replies: 24,
      trending: true,
      icon: TrendingUp,
    },
    {
      title: "Nuevos fichajes para la próxima temporada",
      replies: 15,
      trending: false,
      icon: Users,
    },
    {
      title: "¿Cuál es la mejor estrategia en Dust2?",
      replies: 42,
      trending: true,
      icon: MessageCircle,
    },
    {
      title: "Horarios de entrenamientos abiertos",
      replies: 8,
      trending: false,
      icon: Users,
    },
    {
      title: "Merchandising oficial disponible",
      replies: 31,
      trending: false,
      icon: MessageCircle,
    },
    {
      title: "Resumen del torneo regional",
      replies: 19,
      trending: true,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="w-full lg:w-80 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">COMUNIDAD</h2>
        <p className="text-sm text-muted-foreground mb-6">Últimas Discusiones</p>

        <div className="space-y-3">
          {discussions.map((discussion, index) => {
            const Icon = discussion.icon;
            return (
              <Card
                key={index}
                className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">
                        {discussion.replies} respuestas
                      </span>
                      {discussion.trending && (
                        <span className="text-xs text-primary font-medium">• Trending</span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;
