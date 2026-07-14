<script lang="ts">
  import { TurnstileWidget } from "turnstile-svelte";

  const { labels, lang } = $props<{
    labels: {
      email: string;
      message: string;
      placeholderEmail: string;
      placeholderMessage: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    lang: string;
  }>();

  let email = $state("");
  let message = $state("");
  let turnstileToken = $state<string | null>(null);
  let status = $state<"idle" | "sending" | "success" | "error">("idle");
  let resetCounter = $state(0);

  const SITE_KEY =
    import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";
  const SMTP_API_URL = import.meta.env.PUBLIC_SMTP_API_URL;

  function handleToken(token: string) {
    turnstileToken = token;
  }

  function handleExpire() {
    turnstileToken = null;
  }

  function handleError() {
    turnstileToken = null;
  }

  async function handleSubmit(e: Event) {
    e.preventDefault();
    if (!turnstileToken) return;

    status = "sending";

    const payload = JSON.stringify({
      to_email: email,
      message: [
        ["correo", email],
        ["mensaje", message],
      ],
      turnstile_key: turnstileToken,
    });

    try {
      const res = await fetch(SMTP_API_URL, {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Demasiadas peticiones");
        }
        throw new Error("Error en el servidor");
      }

      email = "";
      message = "";
      status = "success";
    } catch (err) {
      status = "error";
      turnstileToken = null;
      resetCounter++;
    }
  }
</script>

<form
  class="max-w-md mx-auto space-y-4 text-left bg-surface/50 p-6 rounded-2xl border border-text/5 backdrop-blur-sm"
  onsubmit={handleSubmit}
>
  <div>
    <label
      for="email"
      class="block text-xs font-bold uppercase text-muted mb-2"
    >
      {labels.email}
    </label>
    <input
      type="email"
      name="email"
      id="email"
      required
      placeholder={labels.placeholderEmail}
      bind:value={email}
      class="w-full bg-background border border-text/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
    />
  </div>

  <div>
    <label
      for="message"
      class="block text-xs font-bold uppercase text-muted mb-2"
    >
      {labels.message}
    </label>
    <textarea
      name="message"
      id="message"
      required
      rows="3"
      placeholder={labels.placeholderMessage}
      bind:value={message}
      class="w-full bg-background border border-text/10 rounded-lg px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors resize-none"
    ></textarea>
  </div>

  <div class="mt-2 mb-2 flex justify-center min-h-[65px]">
    {#key resetCounter}
      <TurnstileWidget
        sitekey={SITE_KEY}
        theme="auto"
        appearance="interaction-only"
        language={lang}
        ontoken={handleToken}
        onerror={handleError}
        onexpire={handleExpire}
      />
    {/key}
  </div>

  <button
    type="submit"
    disabled={!turnstileToken || status === "sending"}
    class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {#if status === "sending"}
      <span class="animate-spin">⏳</span> {labels.sending}
    {:else}
      {labels.submit}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    {/if}
  </button>

  {#if status === "success"}
    <p class="text-center text-sm mt-4 text-backend block">
      {labels.success}
    </p>
  {/if}
  {#if status === "error"}
    <p class="text-center text-sm mt-4 text-version-control block">
      {labels.error}
    </p>
  {/if}
</form>
