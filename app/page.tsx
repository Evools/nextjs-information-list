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
                    Основные разделы приложения
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
                  <AccordionTrigger>Технологический фокус</AccordionTrigger>
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
                  <AccordionTrigger>Администратор</AccordionTrigger>
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
                  <AccordionTrigger>Преподаватель</AccordionTrigger>
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
                  <AccordionTrigger>Студент</AccordionTrigger>
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
                  <AccordionTrigger>Курсы, главы и материалы</AccordionTrigger>
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
                  <AccordionTrigger>Задания и оценки</AccordionTrigger>
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
                  <AccordionTrigger>Посещаемость и дежурства</AccordionTrigger>
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
                    Группы и управление студентами
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
                    Коины и внутренняя экономика
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
                  <AccordionTrigger>Рейтинги и достижения</AccordionTrigger>
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
                  <AccordionTrigger>Магазин наград</AccordionTrigger>
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

          <Card>
            <CardHeader>
              <CardTitle>Тексты для слайдов</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Ниже — готовые блоки текста, которые можно копировать в
                презентацию. В компактном режиме они короче, в обычном — более
                развёрнутые.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="slide-overview">
                  <AccordionTrigger>Слайд 1 — Общий обзор</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      {compactMode
                        ? "Платформа LMS для школ и курсов с ролями админ / преподаватель / студент, объединяющая управление курсами, группами, заданиями и геймификацией."
                        : "Этот проект — современная веб‑платформа LMS для школ и образовательных центров. Система объединяет управление курсами, группами, заданиями и посещаемостью, а также включает геймификацию с уникальными баллами и внутренней валютой. Платформа поддерживает несколько ролей (администратор, преподаватель, студент) и даёт каждому удобный интерфейс под его задачи."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="slide-roles">
                  <AccordionTrigger>Слайд 2 — Роли и сценарии</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      {compactMode
                        ? "Администратор управляет пользователями, группами, курсами и магазином. Преподаватель ведёт группы, выдаёт задания, проверяет работы и отмечает посещаемость. Студент видит курсы, задания, оценки, рейтинг и баланс коинов."
                        : "Администратор управляет пользователями, создаёт и редактирует курсы, настраивает группы, роли и экономику коинов. Преподаватель работает с учебными группами: выдаёт задания, проверяет работы, выставляет оценки, управляет посещаемостью и дежурствами. Студент получает личный кабинет, где видит свои курсы, задания, оценки, расписание, рейтинг и баланс внутренней валюты."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="slide-features">
                  <AccordionTrigger>
                    Слайд 3 — Учебный функционал
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      {compactMode
                        ? "Курсы делятся на главы и материалы, поддерживаются разные типы заданий, оценивание и учёт посещаемости. Есть работа с группами, профилями пользователей и календарём."
                        : "В системе реализовано полноценное управление учебным контентом: курсы структурируются на главы и материалы, к ним привязываются задания и тесты. Преподаватель может выдавать и обновлять задания, принимать решения студентов, выставлять и пересчитывать оценки. Отдельно реализованы учёт посещаемости и дежурств, работа с группами и профилями пользователей, а также календарь с расписанием и дедлайнами."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="slide-gamification">
                  <AccordionTrigger>Слайд 4 — Геймификация</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      {compactMode
                        ? "Коины, рейтинги, достижения и магазин наград превращают обучение в игру с целями и наградами, повышая мотивацию студентов."
                        : "Геймификация строится вокруг системы коинов, рейтингов и достижений. Студенты получают коины за выполнение заданий, хорошие оценки, посещаемость и участие в жизни группы. На основе активности формируется личный и групповой рейтинг, а также открываются достижения. Заработанные коины можно тратить во встроенном магазине наград на бонусы и привилегии, что делает учебный процесс ближе к игре и повышает вовлечённость."}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="slide-ui">
                  <AccordionTrigger>
                    Слайд 5 — Интерфейс и опыт
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      {compactMode
                        ? "Современный адаптивный интерфейс с отдельными дашбордами для ролей, системой уведомлений и настраиваемым профилем пользователя."
                        : "Интерфейс проекта — это современное адаптивное веб‑приложение с отдельными дашбордами под каждую роль. Встроенные уведомления и календарь помогают не пропускать занятия и дедлайны. Пользователь может настроить профиль, аватар и внешний вид интерфейса. Такой подход делает систему удобной и понятной как для преподавателей, так и для студентов, а также готовой к демонстрации на презентациях и скриншотах."}
                    </p>
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
