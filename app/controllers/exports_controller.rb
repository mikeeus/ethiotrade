class ExportsController < ApplicationController
  # before_action :set_export, only: [:show, :update, :destroy]

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_export
      @export = Export.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def export_params
      params.fetch(:export, {})
    end
end
