"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";

import { ServiceIcon } from "@/components/service-icon";
import { services, serviceCategories, type ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

type Filter = "all" | ServiceCategory;

export function ServicesExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory =
        filter === "all" || service.category === filter;
      const matchesQuery =
        !term ||
        service.name.toLowerCase().includes(term) ||
        service.description?.toLowerCase().includes(term) ||
        service.category.includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [filter, deferredQuery]);

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All care", count: services.length },
    ...serviceCategories.map((category) => ({
      id: category.id as Filter,
      label: category.label,
      count: services.filter((service) => service.category === category.id)
        .length,
    })),
  ];

  return (
    <div>
      <div className="rounded-[1.75rem] border border-ink/10 bg-cream/60 p-4 shadow-soft backdrop-blur-sm md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 lg:pb-0">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors",
                  filter === item.id
                    ? "border-pine-900 bg-pine-900 text-cream"
                    : "border-ink/12 bg-paper/50 text-ink-soft hover:border-ink/25 hover:text-pine-950",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "font-mono text-[0.62rem]",
                    filter === item.id ? "text-copper-300" : "text-ink-soft/55",
                  )}
                >
                  {String(item.count).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-soft/55"
              strokeWidth={1.8}
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services"
              aria-label="Search services"
              className="h-11 w-full rounded-full border border-ink/12 bg-paper/60 pl-10 pr-10 text-sm text-ink placeholder:text-ink-soft/50 focus-visible:border-copper-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-ink-soft/60 transition-colors hover:bg-ink/[0.06] hover:text-ink"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft/55">
          Showing {String(filtered.length).padStart(2, "0")} of{" "}
          {String(services.length).padStart(2, "0")} services
        </p>
        {filtered.length !== services.length && (
          <button
            type="button"
            onClick={() => {
              setFilter("all");
              setQuery("");
            }}
            className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-copper-700 underline-offset-4 hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[1.75rem] border border-dashed border-ink/20 bg-cream/40 px-6 py-16 text-center">
          <p className="font-display text-3xl text-pine-950">
            No services match that search.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink-soft">
            Try a different word, or call our office at{" "}
            <a
              href="tel:+17016522300"
              className="font-semibold text-copper-700 underline decoration-copper-500/40 underline-offset-4"
            >
              701-652-2300
            </a>{" "}
            and we&apos;ll point you in the right direction.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((service) => {
            const category = serviceCategories.find(
              (item) => item.id === service.category,
            );
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream/60 p-6 transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-copper-500/30 hover:bg-cream hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-full border border-ink/12 text-copper-700 transition-colors duration-300 group-hover:border-copper-500/40 group-hover:bg-copper-200/30">
                    <ServiceIcon icon={service.icon} className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 text-ink-soft/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-700" />
                </div>

                <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-soft/55">
                  {category?.label}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-[-0.025em] text-pine-950">
                  {service.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-soft">
                  {service.description ??
                    `Our Carrington team offers ${service.name.toLowerCase()}. Call 701-652-2300 to talk through your options and schedule a visit.`}
                </p>
                <span className="mt-auto pt-5 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-copper-700">
                  View details
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
