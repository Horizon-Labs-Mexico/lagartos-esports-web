import { MessageCircle, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

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
    <div className="w-full lg:w-80 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">{t("community.title")}</h2>
        <p className="text-sm text-muted-foreground mb-6">{t("community.subtitle")}</p>

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
                        {discussion.replies} {t("community.replies")}
                      </span>
                      {discussion.trending && (
                        <span className="text-xs text-primary font-medium">• {t("community.trending")}</span>
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
