"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Card className="max-w-4xl w-full border-0 shadow-xl bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Beyond the Code
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    I'm a full-stack developer who believes technology should make a difference. When I'm not crafting digital solutions, 
                    you'll find me teaching kids to code at Unity Home, conquering hiking trails, networking at tech events, or strategizing over card games. 
                    From marathon finish lines to hackathon victories, I thrive on challenges that push boundaries.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                    <div className="text-2xl mb-2">🏃‍♂️</div>
                    <div className="text-sm font-medium">Marathon Runner</div>
                    <div className="text-xs text-muted-foreground">2x Standard Chartered</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <div className="text-2xl mb-2">👨‍🏫</div>
                    <div className="text-sm font-medium">Code Mentor</div>
                    <div className="text-xs text-muted-foreground">Unity Home Volunteer</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                    <div className="text-2xl mb-2">⚽</div>
                    <div className="text-sm font-medium">Football Player</div>
                    <div className="text-xs text-muted-foreground">Weekend Warrior</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="text-sm font-medium">Hackathon Enthusiast</div>
                    <div className="text-xs text-muted-foreground">Devpost Regular</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950">
                    <div className="text-2xl mb-2">🥾</div>
                    <div className="text-sm font-medium">Hiking Explorer</div>
                    <div className="text-xs text-muted-foreground">Trail Conqueror</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-medium">Tech Networker</div>
                    <div className="text-xs text-muted-foreground">Event Regular</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950">
                    <div className="text-2xl mb-2">🃏</div>
                    <div className="text-sm font-medium">Card Strategist</div>
                    <div className="text-xs text-muted-foreground">Game Night Pro</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-sm font-medium">Innovation Driver</div>
                    <div className="text-xs text-muted-foreground">Always Building</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                    <div className="text-sm text-muted-foreground">Adventures Ahead</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}