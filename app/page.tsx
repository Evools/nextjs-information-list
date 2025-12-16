"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BookOpenCheck,
  ClipboardList,
  Clock3,
  Coins,
  Cpu,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  ShoppingBag,
  Trophy,
  User,
  Users,
} from "lucide-react";

const sections = {
  overview: {
    title: "Общий обзор",
    description:
      "Современная веб‑платформа LMS для школ и курсов с поддержкой ролей: администратор, преподаватель и студент.",
  },
  roles: {
    title: "Роли пользователей",
    description:
      "Разделение прав и интерфейсов для администратора, преподавателя и студента.",
  },
  features: {
    title: "Учебный функционал",
    description:
      "Курсы, главы, материалы, задания, посещаемость, дежурства и управление группами.",
  },
  gamification: {
    title: "Геймификация",
    description:
      "Коины, рейтинги, достижения, групповые награды и внутренняя экономика.",
  },
};

export default function ProjectDocsPage() {
  const compactMode = false;

  return (
    <main className="flex min-h-screen justify-center bg-background px-4 py-8">
      <div className="w-full max-w-5xl space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline">LMS · Gamification</Badge>
              <Badge variant="secondary">Документация презентации</Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              Документация по LMS‑платформе
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Страница — удобный конструктор: быстро копируйте текст для
              слайдов, презентаций и описаний проекта. Используйте аккордионы,
              чтобы просматривать нужные блоки.
            </p>
          </div>
        </header>

        <Separator />

        <section className="grid gap-4 md:grid-cols-[1fr]">
          <Card>
            <CardHeader>
              <CardTitle>{sections.overview.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {compactMode
                  ? "Современная LMS‑платформа для школ и учебных центров с отдельными интерфейсами для администратора, преподавателя и студента."
                  : "Это современная веб‑платформа LMS для школ и учебных центров, которая объединяет управление курсами, группами, заданиями, посещаемостью и геймификацией. Система разработана как модульное приложение: есть отдельные области для администратора, преподавателя и студента."}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="areas">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <LayoutDashboard className="h-4 w-4" />
                      Основные разделы приложения
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">
                          Админ‑панель:
                        </span>{" "}
                        управление пользователями, группами, курсами, магазином
                        и общими настройками системы.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          Кабинет преподавателя:
                        </span>{" "}
                        работа с группами, заданиями, материалами, оценками,
                        посещаемостью и дежурствами.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">
                          Кабинет студента:
                        </span>{" "}
                        курсы, задания, оценки, календарь, рейтинг, коины и
                        магазин наград.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tech">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <Cpu className="h-4 w-4" />
                      Технологический фокус
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Проект построен как современное React/Next.js приложение с
                      компонентным подходом, использованием дизайн‑системы на
                      базе shadcn ui и чётким разделением областей
                      ответственности по директориям.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{sections.roles.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="admin">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <ShieldCheck className="h-4 w-4" />
                      Администратор
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {compactMode
                        ? "Управляет пользователями, группами, курсами и магазином."
                        : "Администратор управляет системой в целом: пользователями, ролями, группами, курсами и магазином."}
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Создание и редактирование пользователей и ролей.</li>
                      <li>
                        Формирование учебных групп и назначение преподавателей.
                      </li>
                      <li>Управление курсами и глобальными настройками.</li>
                      <li>
                        Настройка экономики коинов и ассортимента магазина.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="teacher">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <GraduationCap className="h-4 w-4" />
                      Преподаватель
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {compactMode
                        ? "Ведёт группы, даёт задания, проверяет работы и отмечает посещаемость."
                        : "Преподаватель фокусируется на учебном процессе в рамках своих групп и курсов."}
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Создание и выдача заданий, проверка решений.</li>
                      <li>
                        Выставление оценок и комментариев, работа с рейтингом.
                      </li>
                      <li>Отметка посещаемости и управление дежурствами.</li>
                      <li>
                        Публикация материалов, тестов и обновлений по курсу.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="student">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <User className="h-4 w-4" />
                      Студент
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {compactMode
                        ? "Видит курсы, задания, оценки, расписание, рейтинг и баланс коинов."
                        : "Студент использует систему как центр всего учебного процесса и прогресса."}
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Доступ к курсам, материалам и домашним заданиям.</li>
                      <li>Просмотр оценок, рейтинга и истории активности.</li>
                      <li>Отслеживание расписания и дедлайнов в календаре.</li>
                      <li>Получение и трата коинов в магазине наград.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{sections.features.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="courses">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <BookOpenCheck className="h-4 w-4" />
                      Курсы, главы и материалы
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Курсы структурируются на главы и материалы, что позволяет
                      выстраивать понятный учебный путь. Материалы могут
                      включать теорию, инструкции, дополнительные ресурсы и
                      интерактивные элементы.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assignments">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <ClipboardList className="h-4 w-4" />
                      Задания и оценки
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Преподаватель создаёт разные типы заданий (обычные,
                      тестовые и т.д.), студенты отправляют решения, а система
                      помогает прозрачно отслеживать результаты.
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Выдача и обновление заданий.</li>
                      <li>Приём и просмотр решений студентов.</li>
                      <li>Выставление и пересчёт оценок.</li>
                      <li>Влияние оценок на общий рейтинг и прогресс.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="attendance">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <Clock3 className="h-4 w-4" />
                      Посещаемость и дежурства
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Система поддерживает гибкую работу с посещаемостью и
                      ролями дежурных в группах.
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Отметка присутствия и опозданий.</li>
                      <li>История посещений по студентам и группам.</li>
                      <li>Назначение и ротация дежурных.</li>
                      <li>Связь посещаемости с мотивацией и коинами.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="groups">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <Users className="h-4 w-4" />
                      Группы и управление студентами
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Группы позволяют объединять студентов по классам, потокам
                      или курсам. Для каждой группы доступны свои задания,
                      материалы, достижения и рейтинг.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{sections.gamification.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Геймификация — ключевая часть проекта. Система превращает
                учебный процесс в игру с прозрачными правилами, наградами и
                ощущением прогресса.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="coins">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <Coins className="h-4 w-4" />
                      Коины и внутренняя экономика
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Коины — внутренняя валюта системы. Студенты получают их за
                      разные виды активности и результаты.
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>
                        Начисление за выполнение заданий и хорошие оценки.
                      </li>
                      <li>Бонусы за посещаемость и вовлечённость.</li>
                      <li>Возможные награды за участие в жизни группы.</li>
                      <li>
                        Гибкая настройка правил начисления со стороны админа.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rating">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <Trophy className="h-4 w-4" />
                      Рейтинги и достижения
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Рейтинг отражает общий прогресс студента, а достижения
                      фиксируют важные “вехи” и повышают мотивацию.
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Личный рейтинг студента в группе и по курсу.</li>
                      <li>Групповые достижения за совместные результаты.</li>
                      <li>Визуальная обратная связь о прогрессе и статусе.</li>
                      <li>Связь достижений с системой коинов и магазина.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shop">
                  <AccordionTrigger>
                    <span className="flex items-center gap-2 ">
                      <ShoppingBag className="h-4 w-4" />
                      Магазин наград
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Магазин позволяет превращать виртуальные достижения в
                      осязаемые бонусы внутри системы.
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      <li>Покупка привилегий и “плюшек” за коины.</li>
                      <li>Гибкая настройка ассортимента администратором.</li>
                      <li>Мотивация возвращаться в систему и быть активным.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
