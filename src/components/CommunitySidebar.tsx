import { MessageCircle, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import communityHeader from "@/assets/community-header.png";

const CommunitySidebar = () => {
  const { t } = useLanguage();
  
  const discussions = [
    {
      title: t("community.discussion1"),
      replies: 24,
      trending: true,
      icon: TrendingUp,
    },
    {
      title: t("community.discussion2"),
      replies: 15,
      trending: false,
      icon: Users,
    },
    {
      title: t("community.discussion3"),
      replies: 42,
      trending: true,
      icon: MessageCircle,
    },
    {
      title: t("community.discussion4"),
      replies: 8,
      trending: false,
      icon: Users,
    },
    {
      title: t("community.discussion5"),
      replies: 31,
      trending: false,
      icon: MessageCircle,
    },
    {
      title: t("community.discussion6"),
      replies: 19,
      trending: true,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="w-full lg:w-80">
      <Card className="bg-card/80 backdrop-blur-sm border-border overflow-hidden h-[600px] flex flex-col">
        {/* Header image with text overlay */}
        <div className="relative h-40 flex-shrink-0">
          <img 
            src={communityHeader} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-card" />
          
          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-2xl font-black text-foreground uppercase italic tracking-tight drop-shadow-lg">
                {t("community.title")}
              </h2>
              <div className="w-8 h-8 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary drop-shadow-lg" />
              </div>
            </div>
            <p className="text-sm text-primary font-medium drop-shadow-lg">{t("community.subtitle")}</p>
          </div>
        </div>
        
        {/* Discussions list */}
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="space-y-1">
            {discussions.map((discussion, index) => {
              const Icon = discussion.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 hover:bg-muted/30 px-2 -mx-2 rounded cursor-pointer transition-colors group"
                >
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate pr-4">
                    {discussion.title}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground min-w-[20px] text-right">
                      {discussion.replies}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommunitySidebar;
